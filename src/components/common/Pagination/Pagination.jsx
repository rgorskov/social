import React from 'react';
import { useState } from 'react';
import s from './Pagination.module.css';

const Pagination = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChange,
    portionSize = 10,
}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = Array.from(new Array(pagesCount), (x, i) => i + 1);
    const [portionNumber, setPortionNumber] = useState(
        Math.ceil(currentPage / portionSize)
    );

    const portionStart = (portionNumber - 1) * portionSize + 1;
    const portionEnd = portionStart + +portionSize;

    const onLeftClick = () => setPortionNumber(portionNumber - 1);
    const onRightClick = () => setPortionNumber(portionNumber + 1);

    return (
        <div className={s.pagination}>
            {portionNumber > 1 && <button onClick={onLeftClick}>{'<'}</button>}
            {pages
                .filter((p) => p >= portionStart && p < portionEnd)
                .map((p) => {
                    const className =
                        currentPage === p
                            ? `${s.pageNum} ${s.active}`
                            : s.pageNum;
                    return (
                        <button
                            key={p}
                            className={className}
                            onClick={() => {
                                onPageChange(p);
                            }}
                        >
                            {p}
                        </button>
                    );
                })}
            {portionEnd < pagesCount && (
                <button onClick={onRightClick}>{'>'}</button>
            )}
        </div>
    );
};

export default Pagination;
