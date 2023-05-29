import React from "react";
import { updateRocket, createRocket } from "../../api/rocketApi";
import { Rocket } from "../../interfaces/rocket";
import { FormInput } from "../form/formInput";

export function RocketModal(props: { closeModal: () => void, keys: string[], object: Rocket, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Rocket>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const isEdit = props.isEditModal ? "Edit" : "Add";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (props.isEditModal) updateRocket(formData);
        else createRocket(formData);
        console.log(formData);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{ `${isEdit} Rocket`}</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <button className="button" id={`${isEdit.toLowerCase()}-save-button`}>Save</button>
                </form>

            </div>
        </div>
    );
}