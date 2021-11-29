import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import Select from "react-select";

const TransactionForm = () => {
    const { register, handleSubmit } = useForm();

    async function onSubmit(d) {

    }

    // const [selectedDirection, setSelectedDirection] = useState("none");

    const directionOptions = [
        { value: "none", label: "Empty" },
        { value: "incoming", label: "Incoming" },
        { value: "outgoing", label: "Outgoing" }
    ];

    // const handleDirectionSelect = e => {
    //     setSelectedDirection(e.value);
    // };

    // const [selectedCategory, setSelectedCategory] = useState("none");

    const categoryOptions = [
        { value: "none", label: "Category" },
        { value: "clothing", label: "🧥 Clothing" },
        { value: "debt", label: "💳 Debt" },
        { value: "education", label: "📚 Education" },
        { value: "entertainment", label: "🎮 Entertainment" },
        { value: "food", label: "🍜 Food" },
        { value: "health", label: "❤️‍🩹 Health" },
        { value: "household", label: "🧻 Household" },
        { value: "housing", label: "🏡 Housing" },
        { value: "insurance", label: "🚘 Insurance" },
        { value: "personal", label: "💇🏽 Personal" },
        { value: "savings", label: "💰 Savings" },
        { value: "transportation", label: "🛩️ Transportation" },
        { value: "utilities", label: "📱 Utilities" },
        { value: "other", label: "🏦 Other" }
    ];

    // const handleCategorySelect = e => {
    //     setSelectedCategory(e.value);
    // };

    // const customStyles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       borderBottom: '1px dotted pink',
    //       color: state.isSelected ? 'red' : 'blue',
    //       padding: 20,
    //     }),
    //     control: () => ({
    //       width: 'auto',
    //     }),
    //     singleValue: (provided, state) => {
    //       const opacity = state.isDisabled ? 0.5 : 1;
    //       const transition = 'opacity 300ms';
      
    //       return { ...provided, opacity, transition };
    //     }
    //   }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>$ <input type="number" name="amount" placeholder="0.00" /></label>
                <Select
                    options={directionOptions}
                    // styles={customStyles}
                />
            </div>
            <div>
                <Select
                    options={categoryOptions}
                    // styles={customStyles}
                    // onChange={handleCategorySelect}
                    // value={categoryOptions.filter(function (option) {
                    //     return option.value === selectedCategory;
                    // })}
                />
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default TransactionForm;