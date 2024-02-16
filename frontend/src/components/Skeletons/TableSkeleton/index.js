import React from 'react'
import { Skeleton } from '@material-ui/lab'

const TableSkeleton = ({ rowCount = 8 }) => {
    if (!rowCount && rowCount < 1) {
        rowCount = 8
    }
    return (
        <div className=" tw-w-full">
            {[...Array(rowCount).keys()].map(i => (
                <Skeleton
                    className="tw-my-1"
                    key={i}
                    variant="rect"
                    width="100%"
                    height={60}
                    animation="wave"
                />
            ))}
        </div>
    )
}

export default TableSkeleton
