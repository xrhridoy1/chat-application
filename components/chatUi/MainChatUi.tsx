import React from 'react';
import ChatTop from './ChatTop';
import TextSection from './TextSection';
import TypeSection from './TypeSection';

const MainChatUi = async () => {
    return (
        <div className='max-w-5xl border mx-auto mt-10 p-2 md:p-5 h-[90vh] rounded'>
            <ChatTop />
            <TextSection />
            <TypeSection />
        </div>
    );
};

export default MainChatUi;