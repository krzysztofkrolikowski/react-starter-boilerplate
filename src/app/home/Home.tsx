import React from 'react';
import {useIntl} from "react-intl";

import { LocationInfo } from "components/locationInfo/LocationInfo";
import { LocaleContext } from "i18n/localeContext/LocaleContext";
import { LocalesEnum } from "i18n/locales.enum";

export const Home: React.FC = () => {
    const { formatMessage } = useIntl();
    const { locale, setLocale } = React.useContext(LocaleContext);

    return (
        <>
            <h2>Home</h2>
            <p>
                {formatMessage({ id: 'home.helloWorld' })}
                <span style={{ margin: '0 1rem' }}>&#x2190;</span>
                This text is translated using <a href="https://github.com/formatjs/react-intl/blob/master/docs/API.md#formatmessage"><code>formatMessage</code></a> function from <a href="https://github.com/formatjs/react-intl">react-intl</a>.
                Click <button style={{ fontSize: 'inherit' }} onClick={() => setLocale(locale === LocalesEnum.pl ? LocalesEnum.en : LocalesEnum.pl)}>here</button> to change language.
            </p>
            <p>This is a starter project for TSH React application. Click on navigation links above to learn more.</p>
            <hr />
            <LocationInfo />
        </>
    );
};