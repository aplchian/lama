import React from 'react'
import { Layout } from './layout'
import { useForm } from 'react-hook-form'

const EventDetail = (props: { isNew?: boolean }) => {
    const { register, handleSubmit, watch, errors } = useForm()
    const [onlineTeaching, setOnlineTeaching] = React.useState(false)
    const onSubmit = (data) => console.log(data)

    // @ts-ignore
    return (
        <Layout backPath="/bhakhang-rinpoche">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white lg:min-w-0 lg:flex-1">
                    {/*<div className="pl-4 pr-6 pt-4 pb-4 border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">*/}
                    {/*    <div className="flex items-center">*/}
                    {/*        <h1 className="flex-1 text-lg font-medium">*/}
                    {/*            Shiwa Center #1*/}
                    {/*        </h1>*/}
                    {/*        <h3 className="font-bold text-sm">ID: 1231</h3>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                        <div className="px-4 py-5 sm:px-6">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                Shiwa Center #1
                                            </h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                ID: 1231
                                            </p>
                                        </div>
                                        <div className="border-t border-gray-200">
                                            <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Name
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <label
                                                                htmlFor="name"
                                                                className="sr-only"
                                                            >
                                                                Name
                                                            </label>
                                                            <input
                                                                ref={register({
                                                                    required: true,
                                                                })}
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                            />
                                                            {errors.name && (
                                                                <p
                                                                    className="mt-2 text-sm text-red-600"
                                                                    id="name-error"
                                                                >
                                                                    Name is
                                                                    required
                                                                </p>
                                                            )}
                                                        </div>
                                                    </dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Date
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <label
                                                                htmlFor="date"
                                                                className="sr-only"
                                                            >
                                                                Date
                                                            </label>
                                                            <input
                                                                ref={register({
                                                                    required: true,
                                                                })}
                                                                type="date"
                                                                name="date"
                                                                id="date"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                            />
                                                            {errors.date && (
                                                                <p
                                                                    className="mt-2 text-sm text-red-600"
                                                                    id="date-error"
                                                                >
                                                                    Date is
                                                                    required
                                                                </p>
                                                            )}
                                                        </div>
                                                    </dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Online Teaching
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {/* On: "bg-indigo-600", Off: "bg-gray-200" */}
                                                        <button
                                                            type="button"
                                                            aria-pressed="false"
                                                            className={` ${
                                                                onlineTeaching
                                                                    ? 'bg-indigo-600'
                                                                    : 'bg-gray-200'
                                                            } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                                            onClick={() =>
                                                                setOnlineTeaching(
                                                                    (x) => !x
                                                                )
                                                            }
                                                        >
                                                            <span className="sr-only">
                                                                Use setting
                                                            </span>
                                                            {/* On: "translate-x-5", Off: "translate-x-0" */}
                                                            <span
                                                                aria-hidden="true"
                                                                className={` ${
                                                                    onlineTeaching
                                                                        ? 'translate-x-5'
                                                                        : 'translate-x-0'
                                                                } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                                                            />
                                                        </button>
                                                    </dd>
                                                </div>
                                                {!onlineTeaching && (
                                                    <>
                                                        {' '}
                                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                City
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="city"
                                                                        className="sr-only"
                                                                    >
                                                                        City
                                                                    </label>
                                                                    <input
                                                                        ref={
                                                                            register
                                                                        }
                                                                        type="text"
                                                                        name="city"
                                                                        id="city"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                                    />
                                                                </div>
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                State
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="state"
                                                                        className="sr-only"
                                                                    >
                                                                        State
                                                                    </label>
                                                                    <input
                                                                        ref={
                                                                            register
                                                                        }
                                                                        type="text"
                                                                        name="state"
                                                                        id="state"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                                    />
                                                                </div>
                                                            </dd>
                                                        </div>
                                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Country
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="country"
                                                                        className="sr-only"
                                                                    >
                                                                        Country
                                                                    </label>
                                                                    <input
                                                                        ref={
                                                                            register
                                                                        }
                                                                        type="text"
                                                                        name="country"
                                                                        id="country"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                                    />
                                                                </div>
                                                            </dd>
                                                        </div>{' '}
                                                    </>
                                                )}

                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Notes
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <label
                                                                htmlFor="notes"
                                                                className="sr-only"
                                                            >
                                                                Notes
                                                            </label>
                                                            <input
                                                                ref={register}
                                                                type="text"
                                                                name="notes"
                                                                id="notes"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                            />
                                                        </div>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <div className="pl-4 pr-6 pt-4 pb-4 border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                            <div className="flex items-center">
                                <h1 className="flex-1 text-lg font-medium">
                                    Media
                                </h1>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                        <div className=" border-gray-200">
                                            <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Media Type
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <select
                                                                // ref={register}
                                                                id="location"
                                                                name="location"
                                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                            >
                                                                <option>
                                                                    Audio
                                                                </option>
                                                                <option
                                                                    selected
                                                                >
                                                                    Video
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </dd>
                                                </div>

                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Notes
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <input
                                                                // ref={register}
                                                                type="text"
                                                                name="notes"
                                                                id="notes"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                            />
                                                        </div>
                                                    </dd>
                                                </div>

                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Attachments
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                                <div className="w-0 flex-1 flex items-center">
                                                                    {/* Heroicon name: paper-clip */}
                                                                    <svg
                                                                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    <span className="ml-2 flex-1 w-0 truncate">
                                                                        teaching-bodhichitta.mp3
                                                                    </span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0">
                                                                    <a
                                                                        href="#"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    >
                                                                        Download
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <div className="pl-4 pr-6 pt-4 pb-4 border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                            <div className="flex items-center">
                                <h1 className="flex-1 text-lg font-medium">
                                    Transcription
                                </h1>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                        <div className=" border-gray-200">
                                            <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Status
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <select
                                                                // ref={register}
                                                                id="status"
                                                                name="status"
                                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                            >
                                                                <option
                                                                    selected
                                                                >
                                                                    Not Started
                                                                </option>
                                                                <option>
                                                                    In Progress
                                                                </option>
                                                                <option>
                                                                    In Review
                                                                </option>
                                                                <option>
                                                                    Complete
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </dd>
                                                </div>

                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Transcriber
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <select
                                                                // ref={register}
                                                                id="transcriber"
                                                                name="transcriber"
                                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                            >
                                                                <option
                                                                    selected
                                                                >
                                                                    Alex Boquist
                                                                </option>
                                                                <option>
                                                                    John Doe
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </dd>
                                                </div>

                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Reviewer
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <select
                                                                // ref={register}
                                                                id="reviewer"
                                                                name="reviewer"
                                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                            >
                                                                <option>
                                                                    Alex Boquist
                                                                </option>
                                                                <option
                                                                    selected
                                                                >
                                                                    John Doe
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </dd>
                                                </div>

                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Attachments
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                                <div className="w-0 flex-1 flex items-center">
                                                                    {/* Heroicon name: paper-clip */}
                                                                    <svg
                                                                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    <span className="ml-2 flex-1 w-0 truncate">
                                                                        transcription.md
                                                                    </span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0">
                                                                    <a
                                                                        href="#"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    >
                                                                        Download
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </dd>
                                                </div>

                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Notes
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <input
                                                                // ref={register}
                                                                type="text"
                                                                name="notes"
                                                                id="notes"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                                            />
                                                        </div>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save
                </button>
            </form>
        </Layout>
    )
}

export default EventDetail
