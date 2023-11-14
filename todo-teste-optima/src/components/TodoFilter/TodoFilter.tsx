const TodoFilter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
            <option value="All">Todas</option>
            <option value="Completed">Concluidas</option>
            <option value="Incomplete">Pendetes</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>A-Z</button>
          <button onClick={() => setSort("Desc")}>Z-A</button>
        </div>
      </div>
    </div>
  );
};

export default TodoFilter;
