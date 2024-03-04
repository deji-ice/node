useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]); // Includes 'list' dependency
  