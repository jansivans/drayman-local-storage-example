export const component: DraymanComponent = async ({ Browser, forceUpdate }) => {
    let token = await Browser.getToken();

    return () => {
        return (
            <>
                <h1>{token ? 'Token is set' : 'Token is not set'}</h1>
                <div>
                    <button
                        onClick={async () => {
                            token = '123';
                            await Browser.saveToken({ token });
                            await forceUpdate();
                        }}
                    >Set token
                    </button>
                    <button
                        onClick={async () => {
                            token = null;
                            await Browser.removeToken();
                            await forceUpdate();
                        }}
                    >Remove token
                    </button>
                </div>
            </>
        )
    }
}