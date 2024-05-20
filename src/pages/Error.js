import React from 'react'
import MainNavigation from '../components/MainNavigation'

export default function Error() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>an Error Occured!</h1>
                <p>
                    Could not find this page!
                </p>
            </main>
        </>
    )
}
