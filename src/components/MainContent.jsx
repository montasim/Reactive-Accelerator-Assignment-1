import React, {useState} from 'react';
import TableRow from "./TableRow.jsx";
import TableData from "./TableData.jsx";
import StudentsJSON from "../data/students.json";
import StudentDetails from "./StudentDetails.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function MainContent() {
    const [searchQuery, setSearchQuery] = useState("");

    const tableRow = ['ID', 'Name', 'Scores', 'Percentage'];

    const TableHeader = tableRow.map((header, index) => (
        <TableData
            tableKey={index}
            customClass={"p-5 text-sm md:text-xl font-semibold text-left"}
            tableDataColSpan={""}
            tableDataText={header}
        />
    ));

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredStudents = Object.entries(StudentsJSON).reduce((acc, [className, students]) => {
        const filtered = students.filter(student =>
            student.Name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filtered.length > 0) {
            acc[className] = filtered;
        }

        return acc;
    }, {});

    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-green-500">Students</span> of the Year
                    </h2>

                    <div className="flex">
                        <div
                            className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]"
                        >

                            <Input
                                inputType={"search"}
                                customClass={"z-20 block w-full bg-white-500 text-gray px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-gray"}
                                InputPlaceholder={"Search by Student "}
                                IsRequired={true}
                                onChangeFunction={handleSearchChange}
                            />

                            <Button
                                customClass={"absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-navy"}
                                buttonText={"Search"}
                            >
                                <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[848px] mx-auto overflow-auto">
                    <table className="w-full">
                        <thead>
                        <TableRow customClass={"text-center border-b border-[]"}>
                            {TableHeader}
                            </TableRow>
                        </thead>

                        <tbody>
                            {!filteredStudents && Object?.entries(StudentsJSON)?.map(([className, classDetails], index) => (
                                <React.Fragment key={index}>
                                    <TableRow customClass={"bg-white-800/5"}>
                                        <TableData
                                            tableKey={index}
                                            customClass={"p-5 text-sm md:text-xl"}
                                            tableDataColSpan={"4"}
                                            tableDataText={className}
                                        />
                                    </TableRow>

                                    <StudentDetails classData={classDetails} />
                                </React.Fragment>
                            ))}

                            {Object.entries(filteredStudents).map(([className, classDetails], index) => (
                                <React.Fragment key={index}>
                                    <TableRow customClass={"bg-white-800/5"}>
                                        <TableData
                                            tableKey={index}
                                            customClass={"p-5 text-sm md:text-xl"}
                                            tableDataColSpan={"4"}
                                            tableDataText={className}
                                        />
                                    </TableRow>

                                    <StudentDetails classData={classDetails} />
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default MainContent
