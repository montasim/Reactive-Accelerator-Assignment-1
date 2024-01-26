import TableRow from "./TableRow.jsx";
import TableData from "./TableData.jsx";
import Image from "./Image.jsx";
import UserImage from "../assets/avatar.png";

function StudentDetails({ classData = {} }) {
    const calculateAverage = (scores) => {
        const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

        return (total / Object.keys(scores).length).toFixed(2);
    };

    return (
        <>
            {classData?.map((student, index) => (
                <TableRow key={index} customClass={"p-5 text-sm md:text-xl"}>
                    <TableData
                        tableKey={index}
                        customClass={"p-5 text-sm md:text-xl"}
                        tableDataColSpan={"1"}
                        tableDataText={student?.ID}
                    />

                    <TableData
                        tableKey={index}
                        customClass={"flex flex-row-reverse items-centered justify-end gap-x-3 p-5 text-sm md:text-xl"}
                        tableDataColSpan={"1"}
                        tableDataText={student?.Name}
                    >
                        <Image
                            customClass={"w-8 h-8"}
                            imageSrc={UserImage}
                            imageAltText={student?.Name + "image"}
                            width={"32"}
                            height={"32"}
                        />
                    </TableData>

                    <TableData
                        tableKey={index}
                        customClass={"p-5 text-sm md:text-xl"}
                        tableDataColSpan={"1"}
                        tableDataText={calculateAverage(student?.Scores)}
                    />

                    <TableData
                        tableKey={index}
                        customClass={"p-5 text-sm md:text-xl"}
                        tableDataColSpan={"1"}
                        tableDataText={student?.Percentage.toString() + '%'}
                    />
                </TableRow>
            ))}
        </>
    );
}

export default StudentDetails
