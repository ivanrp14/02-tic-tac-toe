const TURNS = {
  X: 'x',
  O: 'o'
}
const board = Array(9).fill(null);
const Square = ({ children, updateBoard, index}) => {
  return(
    <div className="square">
      {children}
    </div>
  )
}
function App(){
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
      {
        board.map(( n , index) => {
          return (
           <Square
            key={index}
            index={index}
            >
              {index}
            </Square>
          )
        })
      }
      </section>
    </main>
  )
}
export default App