import React from 'react';
import styled from 'styled-components';

const ThanksPage = () => {
    return (
        <Container>
                <Title>Thank you for purchasing!</Title>
                Please check your email for a link to your live database. <br />
                If you have a any questions or issues, please email rusandreev@gmail.com
        </Container>
    );
}

export default ThanksPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 170px);
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
    opacity: 0.75;
    margin-bottom: 15px;
`;
