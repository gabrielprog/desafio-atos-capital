export default function timezone() {
    const date = new Date();
    const format = { timeZone: 'America/Sao_Paulo', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleString('en-US', format);
}