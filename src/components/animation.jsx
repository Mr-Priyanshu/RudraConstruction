// // import React, { useState, useEffect } from 'react';
// // import styled, { keyframes } from 'styled-components';

// // // Define keyframes for animation
// // const fadeInOut = keyframes`
// //   0%, 100% {
// //     opacity: 0;
// //   }
// //   50% {
// //     opacity: 1;
// //   }
// // `;

// // // Styled component for animated text
// // const AnimatedText = styled.div`
// //   position: relative;
// //   display: inline-block;
// //   animation: ${fadeInOut} 4s infinite;
// // `;

// // const TextAnimation = () => {
// //     // const [text, setText] = useState('Hello, World!');

// //     // useEffect(() => {
// //     //     // Update text every 5 seconds
// //     //     const interval = setInterval(() => {
// //     //         setText('Goodbye, World!');
// //     //     }, 5000);

// //     //     return () => clearInterval(interval);
// //     // }, []);

// //     return (
// //         <AnimatedText>
// //             UNIQUE
// //         </AnimatedText>
// //     );
// // };

// // export default TextAnimation;



// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';

// // Define keyframes for animation
// const writeAnimation = keyframes`
//   from {
//     width: 0;
//   }
//   to {
//     width: 100%;
//   }
// `;

// const deleteAnimation = keyframes`
//   from {
//     width: 100%;
//   }
//   to {
//     width: 0;
//   }
// `;

// // Styled component for animated text
// const AnimatedText = styled.div`
//   overflow: hidden;
//   white-space: nowrap;
// `;

// const Text = styled.span`
//   display: inline-block;
//   animation: ${props => props.animation === 'write' ? writeAnimation : deleteAnimation} ${props => props.animationDuration} linear forwards;
// `;

// const TextAnimation = () => {
//     const [text, setText] = useState('');
//     const [writing, setWriting] = useState(true);

//     const phrases = [
//         'Hello, World!',
//         'This is a text animation.',
//         'It deletes and writes text.',
//         'Enjoy coding!',
//     ];

//     useEffect(() => {
//         let currentIndex = 0;
//         let currentText = '';
//         let interval;

//         const writeText = () => {
//             if (currentIndex < phrases.length) {
//                 currentText = phrases[currentIndex];
//                 setText(currentText);
//                 setWriting(true);
//                 interval = setTimeout(deleteText, 2000); // Time before deleting text
//             } else {
//                 currentIndex = 0;
//             }
//             currentIndex++;
//         };

//         const deleteText = () => {
//             setWriting(false);
//             interval = setTimeout(writeText, 1000); // Time before writing new text
//         };

//         writeText();

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <AnimatedText>
//             <Text animation={writing ? 'write' : 'delete'} animationDuration={writing ? '2s' : '1s'}>
//                 {text}
//             </Text>
//         </AnimatedText>
//     );
// };

// export default TextAnimation;


import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const writeAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const deleteAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

// Styled components
const AnimatedText = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${props => props.animation === 'write' ? writeAnimation : deleteAnimation} ${props => props.animationDuration} linear forwards;
`;

const TextAnimation = () => {

    const [animationType, setAnimationType] = useState('write');

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationType('delete');
            setTimeout(() => {
                setAnimationType('write');
            }, 1000); // Time before writing new text
        }, 1000); // Time before deleting text
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedText>
            <Text animation={animationType} animationDuration="20s">
                Hello
            </Text>
        </AnimatedText>
    );
};

export default TextAnimation;

