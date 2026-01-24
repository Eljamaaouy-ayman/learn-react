import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Page(){

    const [currentLang, setCurrentLang] = useState('EN')

    const displayMessage = () => {
        switch(currentLang) {
            case 'FR' : return 'bonjour';
            case 'EN' : return 'hello';
            case 'ES' : return 'hola'
        }
    }
    return <>
        <LanguageSwitcher onLanguageChange={(value) => {setCurrentLang(value)}}></LanguageSwitcher>
        <hr />
        the current language is {currentLang}
        <hr />
            <div>
                <div className="alert alert-primary" role="alert">
                    <strong>{displayMessage()}</strong>
                </div>
            </div>
    </>
}