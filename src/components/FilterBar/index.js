import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function FilterBar(props) {
  const {
    className,
    profile,
    hiddenItemsCount,
    itemCount,
    obtainedCount,
    countStyle,
    displayFilters,
    filters,
    filterValues,

    toggleFilter,
    toggleCountStyle,
    toggleFilterValue,
  } = props;
  return (
    <div className={cx(className, styles.root)}>
      <div className={styles.filterFlex}>
        {profile && hiddenItemsCount > 0 ? (
          <div className={styles.filteredOut}>
            {hiddenItemsCount} items hidden by filters
          </div>
        ) : (
          <div className={styles.spacer}>100 items hidden by filters</div>
        )}

        <div className={styles.itemCountWrapper}>
          <div className={styles.itemCount} onClick={toggleCountStyle}>
            Collected{' '}
            {countStyle ? (
              <span>{Math.floor(itemCount / obtainedCount * 100)}%</span>
            ) : (
              <span>
                {itemCount} / {obtainedCount}
              </span>
            )}
          </div>
        </div>

        <div
          className={cx(
            styles.toggleFilters,
            displayFilters && styles.filtersActive,
          )}
          onClick={toggleFilter}
        >
          Filters <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
      </div>

      {displayFilters && (
        <div className={styles.filters}>
          <div className={styles.filterInner}>
            <div className={styles.neg}>
              {filters.map(([filterId, filterLabel]) => (
                <label className={styles.filterOpt}>
                  <input
                    type="checkbox"
                    checked={filterValues[filterId]}
                    onChange={() => toggleFilterValue(filterId)}
                  />{' '}
                  {filterLabel}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
