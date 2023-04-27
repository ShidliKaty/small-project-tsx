import ExpenseList from "./expense-tracker/components/ExpenseList";
import {useState} from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {

    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
        {id: 3, description: 'ccc', amount: 10, category: 'Utilities'},
        {id: 4, description: 'ddd', amount: 10, category: 'Utilities'}
    ])

    const visibleExpenses = selectedCategory
        ? expenses.filter(e => e.category === selectedCategory)
        : expenses

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
            </div>
            <ExpenseList expenses={visibleExpenses}
                         onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}/>
        </div>
    )
    // const [alertVisible, setAlertVisibility] = useState(false)
    // return (
    //     <div>
    //         {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    //         <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    //         <Like onClick={() => console.log('Clicked')}/>
    //         <ExpandedText maxChars={10}>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto consequuntur earum eos facere
    //             labore, laborum minus quidem. Adipisci amet autem cum cupiditate debitis earum hic, libero minima nemo
    //             nesciunt nostrum obcaecati porro qui similique sunt totam ullam. Aut earum minima nam perferendis
    //             placeat reprehenderit rerum temporibus vel voluptatum. Alias ea eius laudantium maiores rem! Alias
    //             asperiores assumenda atque beatae blanditiis commodi consequuntur deleniti distinctio dolores dolorum
    //             ducimus ea est ipsum magni minus necessitatibus nemo nihil, nisi non officia officiis pariatur placeat
    //             quae qui quidem quos temporibus ullam ut vel vitae! Aut debitis, deleniti ducimus exercitationem ipsam
    //             possimus quos voluptatum.
    //         </ExpandedText>
    //     </div>
    // )
}

export default App
