import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import Select from "react-select";

const TransactionForm = () => {
    const { register, handleSubmit } = useForm();

    async function onSubmit(d) {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>$ <input type="number" name="amount" placeholder="0.00" /></label>
                <select {...register("direction")}>
                    <option value="incoming">Incoming</option>
                    <option value="outgoing">Outgoing</option>
                </select>
            </div>
            <div>
                
            <select {...register("category")}>
                    <option value="none">Category</option>
                    <option value="clothing">🧥 Clothing</option>
                    <option value="debt">💳 Debt</option>
                    <option value="education">📚 Education</option>
                    <option value="entertainment">🎮 Entertainment</option>
                    <option value="food">🍜 Food</option>
                    <option value="health">❤️‍🩹 Health</option>
                    <option value="household">🧻 Household</option>
                    <option value="housing">🏡 Housing</option>
                    <option value="insurance">🚘 Insurance</option>
                    <option value="personal">💇🏽 Personal</option>
                    <option value="savings">💰 Savings</option>
                    <option value="transport">🛩️ Transport</option>
                    <option value="utility">📱 Utility</option>
                    <option value="other">🏦 Other</option>
                </select>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default TransactionForm;