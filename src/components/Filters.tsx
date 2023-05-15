import { Button, Title } from "@mantine/core"
import IndustryFilter from "./filters/IndustryFilter"
import SalaryFilter from "./filters/SalaryFilter"

export const Filters = (): JSX.Element => {
    return (
        <div>
            <div>
            <Title />
            <Button />
            </div>
            <IndustryFilter />
            <SalaryFilter />
            <Button />
        </div>
    )
    
}