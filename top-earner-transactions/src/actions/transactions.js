
export  const getTransactions = async () => {
    const response = await fetch("http://localhost:3000/transactions", { 
      method: "GET",
    });
    const data = await response.json();
    return data;
};

export  const submitTransactions = async (finalData) => {
  const response = await fetch("http://localhost:3000/transactions", { 
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: finalData
  });
  const data = await response.json();
  return data;
};