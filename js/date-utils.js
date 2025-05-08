export function formatDateTime(date) {
  
    const formatter = new Intl.DateTimeFormat("es", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    })

    return formatter.format(date)
}


export function otraFuncionReutilizable() {
    // Lógica de otra función reutilizable
    console.log("Esta es otra función reutilizable.");
}
