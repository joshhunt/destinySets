import React, { useState, useMemo } from 'react';
import { set } from 'lodash';
import produce from 'immer';

import allSetData from 'app/setData';

import Item from './ItemWithTooltip';
import AddItemModal from './AddItemModal';

import s from './styles.styl';

function DefinitionString({ phrase }) {
  return <span className={s.mono}>{phrase.fallback}</span>;
}

export default function EditorPage() {
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);
  const setData = allSetData.yearTwo;

  const normalizedSetData = useMemo(
    () =>
      produce(setData, draft => {
        console.log({ setData, draft });
        draft.forEach(pageSection => {
          pageSection.sets.forEach(set => {
            set.sections.forEach(section => {
              if (!section.itemGroups && section.items) {
                section.itemGroups = [section.items];
                delete section.items;
              }
            });
          });
        });
      }),
    [setData]
  );

  const [pageData, setPageData] = useState(normalizedSetData);

  function makeOnChange(...args) {
    return ev => {
      const newPageData = produce(pageData, draft => {
        set(draft, args, ev.target.value);
      });

      setPageData(newPageData);
    };
  }

  function makeOnChangeInt(...args) {
    const onChange = makeOnChange(...args);

    return ev => {
      ev.target.value = parseInt(ev.target.value, 10);
      onChange(ev);
    };
  }

  function openAddItemModal() {
    setAddItemModalOpen(true);
  }

  function recieveNewItems(items) {
    setAddItemModalOpen(false);
    console.log('recieved new items', items);
  }

  return (
    <div className={s.root}>
      <AddItemModal isOpen={addItemModalOpen} addItems={recieveNewItems} />

      {pageData.map((pageSection, index) => {
        return (
          <div className={s.section} key={index}>
            <input
              type="text"
              placeholder="Section name"
              value={pageSection.name}
              className={s.sectionNameField}
              onChange={makeOnChange(index, 'name')}
            />

            <div className={s.sets}>
              {pageSection.sets.map((set, ii) => {
                return (
                  <div className={s.set} key={ii}>
                    <div className={s.setHeader}>
                      {set.name && set.name.path ? (
                        <DefinitionString phrase={set.name} />
                      ) : (
                        <input
                          placeholder="name"
                          value={set.name}
                          className={s.setNameField}
                          onChange={makeOnChange(index, 'sets', ii, 'name')}
                        />
                      )}
                    </div>

                    <div className={s.setBody}>
                      {set.sections.map((section, iii) => {
                        return (
                          <div className={s.setSection}>
                            <div className={s.split}>
                              <div>
                                <input
                                  placeholder="name"
                                  value={section.name}
                                  className={s.setNameField}
                                  onChange={makeOnChange(
                                    index,
                                    'sets',
                                    ii,
                                    'sections',
                                    iii,
                                    'name'
                                  )}
                                />
                              </div>

                              <div>
                                <label>season:</label>
                                <input
                                  placeholder="e.g. 6"
                                  value={section.season}
                                  className={s.setSeasonField}
                                  onChange={makeOnChangeInt(
                                    index,
                                    'sets',
                                    ii,
                                    'sections',
                                    iii,
                                    'season'
                                  )}
                                />
                              </div>
                            </div>

                            <div className={s.itemGroups}>
                              {section.itemGroups.map(group => (
                                <div className={s.itemGroup}>
                                  {group.map(itemHash => (
                                    <Item
                                      className={s.item}
                                      itemHash={itemHash}
                                    />
                                  ))}

                                  <button
                                    className={s.button}
                                    onClick={openAddItemModal}
                                  >
                                    Add item
                                  </button>
                                </div>
                              ))}

                              <div className={s.fullRow}>
                                <button className={s.button}>
                                  Add item group
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <button className={s.button}>Add set section</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <button>Add section</button>
    </div>
  );
}
