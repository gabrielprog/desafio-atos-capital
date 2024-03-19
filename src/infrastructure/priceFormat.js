export default function formatNumberToRealEnglish(number) {
    const numberFormat = number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return numberFormat;
}