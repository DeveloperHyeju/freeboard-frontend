import styled from "@emotion/styled";

export const Inner = styled.div`
    width:1200px;
    margin:80px auto 300px auto;
    box-sizing:border-box;
    padding:80px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`
export const Title = styled.h1`
    font-size:34px;
    font-weight:bold;
    text-align:center;
    padding-bottom:80px;
    margin:0;
`

export const Row = styled.div`
    padding-bottom:40px;
`

export const Label = styled.label`
    width:100%;
    display:block;
    font-size:16px;
    font-weight:500;
    padding-bottom:15px;
    box-sizing:border-box;
`

export const Input = styled.input`
    width:100%;
    border:1px solid #bdbdbd;
    line-height:52px;
    box-sizing:border-box;
    font-size:16px;
    padding:0 14px;
    ::placeholder{
        color:#bdbdbd;
    }
`

export const ContentInput = styled.textarea`
    width:100%;
    height:480px;
    border:1px solid #bdbdbd;
    padding:14px 16px;
    box-sizing:border-box;
    font-size:16px;
    ::placeholder{
        color:#bdbdbd;
    }
`

export const Column = styled.div`
    display:flex;
    gap:16px;
`

export const AddressInput = styled.input`
    box-sizing:border-box;
    border:1px solid #bdbdbd;
    width:77px;
    font-size:16px;
    line-height:52px;
    padding:0 16px;
    ::placeholder{
        color:#bdbdbd;
    }
`

export const AddressButton = styled.button`
    background-color:#000;
    padding:0 16px;
    line-height:52px;
    box-sizing:border-box;
    color:#fff;
    font-size:16px;
`

export const DetailedAddressInput = styled.input`
    margin-top:16px;
    border:1px solid #bdbdbd;
    box-sizing:border-box;
    line-height:52px;
    width:100%;
    padding:0 14px;
`

export const AttachBoxList = styled.ul`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
    gap:24px;
    padding:0;
    margin:0;
`

export const AttachBox = styled.li`
    height:78px;
    background-color:#bdbdbd;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    ::before{
        display:block;
        content:'';
        width:14px;
        height:14px;
        background:url("/icon/add_icon.png") no-repeat center center / 100%;
        padding-bottom:5px;
    }
`


export const RadioBox = styled.input`
    vertical-align:middle;
    margin-right:10px;
    accent-color:#ffd600;
`

export const RadioBoxLabel = styled.label`
    vertical-align:middle;
    font-size:16px;
    font-weight:500;
    margin-right:22px;
`

export const ButtonBox = styled.div`
    display:flex;
    justify-content:center;
`

export const MainButton= styled.button`
    background-color:#ffd600;
    padding:14px 60px;
    box-sizing:border-box;
    font-size:16px;
    font-weight:500px;
    border:0;
`;
