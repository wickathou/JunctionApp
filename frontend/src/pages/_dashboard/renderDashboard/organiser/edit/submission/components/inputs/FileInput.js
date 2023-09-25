import Button from 'components/generic/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as DashboardActions from 'redux/dashboard/actions'

const FileInput = ({ value = null, handleChange = () => {} }) => {
    const dispatch = useDispatch()
    console.log('field input value :>> ', value)
    let parsedValue

    if (typeof value === 'string' && value !== '') {
        parsedValue = JSON.parse(value)
    } else {
        parsedValue = value
    }

    console.log('valueObject :>> ', parsedValue)

    const fileTest = async () => {
        await dispatch(
            DashboardActions.getFileForProject(
                parsedValue.id,
                parsedValue.filename,
            ),
        )
    }

    const deleteTest = async () => {
        handleChange('')
        await dispatch(DashboardActions.deleteFileForProject(parsedValue.id))
    }
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
            <label
                htmlFor="dropzone-file"
                className="hover:tw-bg-gray-100 tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-64 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 dark:hover:tw-bg-gray-800 dark:tw-bg-gray-700 tw-hover:tw-bg-gray-100 dark:tw-border-gray-600 dark:hover:tw-border-gray-500 dark:hover:tw-bg-gray-600"
            >
                {!value && (
                    <>
                        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-5 tw-pb-6">
                            <svg
                                aria-hidden="true"
                                className="tw-w-10 tw-h-10 tw-mb-3 tw-text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <p className="tw-mb-2 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">
                                <span className="tw-font-semibold">
                                    Click to upload
                                </span>{' '}
                                or drag and drop
                            </p>
                            <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="tw-hidden"
                            // value={value}
                            onChange={e => {
                                console.log('File details', e.target.files[0])
                                handleChange(e.target.files[0])
                            }}
                        />
                    </>
                )}
                {value && (
                    <div>
                        <Button variant="jContained" onClick={fileTest}>
                            Download {parsedValue.filename}
                        </Button>
                        <Button onClick={deleteTest}>
                            Delete {parsedValue.filename}
                        </Button>
                    </div>
                )}
            </label>
        </div>
    )
}

export default FileInput
