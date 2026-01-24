export default function LanguageSwitcher({onLanguageChange}) {

    const handleLangChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
    }

    return <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" data-lang='FR' href="#" onClick={handleLangChange}>FRENSH</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='EN' href="#" onClick={handleLangChange}>ENGLISH</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='ES' href="#" onClick={handleLangChange}>ESPAGNOL</a>
            </li>
        </ul>
    </>
}