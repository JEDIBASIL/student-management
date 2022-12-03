import OverviewCard from "../../components/OverviewCard"
import TopBar from "../../components/TopBar"
import { RiGroupLine, RiBarChartHorizontalFill } from "react-icons/ri"
import LevelChart from "../../components/LevelChart"
import DataTable from "react-data-table-component"

const Home = () => {

    const tableColumns = [
        {
            name: "First name",
            sortable: true,
        },
        {
            name: "Last name",
            sortable: true,
        },
        {
            name: "Department",
        },
        {
            name: "Gender",
            sortable: true,
        },
    ];

    return (
        <div>
            <TopBar pageName={"Home"} />
            <div className="overview_container">
                <OverviewCard title={"Total students"} amount={"2.12K"} icon={<RiGroupLine />} color={"orange"} />
                <OverviewCard title={"Today's students"} amount={"+120"} icon={<RiBarChartHorizontalFill />} color={"slateblue"} />
                <OverviewCard title={"Total students"} amount={"2.12K"} icon={<RiGroupLine />} color={"slategray"} />
            </div>

            <div className="student_overview_container">
                <div className="main recent_student_table">
                    <DataTable
                        columns={tableColumns}
                        data={[{}, {}]}
                        pagination
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        highlightOnHover
                        selectableRows
                        fixedHeader
                    />
                </div>

                <div className="level_chart">
                    <LevelChart />
                </div>
                <div className="level_chart">
                    <LevelChart />
                </div>
            </div>

        </div>
    )
}

export default Home