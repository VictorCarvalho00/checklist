import './empty-state.style.css'

export function EmptySatate() {
    return (
        <section className='empty-state'>
            <p>Ainda não tem tarefas cadastradas, adicione para começar!</p>
            <img src="/empty.png" alt="" />
        </section>
    )
}