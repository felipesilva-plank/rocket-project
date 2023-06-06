import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { CrewTable } from "../table/crewTable";
import { JSX } from "react/jsx-runtime";

const Template: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewTable data={[
    {
        id: 1,
        name: "the super crew",
        crewman: [1,2,3]
    },
]} {...args} />;

export default {
    title: "Components/CrewTable",
    component: CrewTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

export const Default = Template.bind({});