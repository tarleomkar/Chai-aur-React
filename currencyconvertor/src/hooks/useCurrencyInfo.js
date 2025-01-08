import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null); // Use `null` initially to handle loading states.
    const [error, setError] = useState(null); // Add error state to handle potential fetch issues.

    useEffect(() => {
        if (!currency) return; // Avoid making requests if `currency` is not provided.

        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
                
                if (!response.ok) {
                    throw new Error(`Error fetching currency data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result); // Assuming the API response is correct
            } catch (err) {
                setError(err.message);
                setData(null); // Clear data on error
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return { data, error }; // Return both data and error for better flexibility.
}

export default useCurrencyInfo;
