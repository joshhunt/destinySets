import React, { useState, useMemo } from 'react';
import { set } from 'lodash';
import produce from 'immer';

import allSetData from 'app/setData';

import s from './styles.styl';

function DefinitionString({ phrase }) {
  return <span className={s.mono}>{phrase.fallback}</span>;
}

export default function EditorPage() {
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

  console.log('pageData:', pageData);

  return (
    <div>
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
                        );
                      })}
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
