import styled from "styled-components";

export const TodoStyle = styled.div`
    background-color: black;
    padding: 20px 10px;
    width: 35%;
    border-radius: 10px;
    min-height: 300px;
    color: white;
 
    
    .section-title {
        text-align: center;
        padding: 15px 0;
        font-size: 28px;
    }

    .section-container-search {
        display: flex;
        flex-direction: row;
        margin: 15px 0;

        .section-search {
            box-sizing: border-box;
            background: transparent;
            padding: 8px;
            border-radius: 8px 0 0 8px;
            border: 2px solid blue;
            width: 100%;
            color: white;
            &:focus,
            &:active,
            &:focus-visible,
            &:-internal-autofill-selected {
                outline: blue;
                background: transparent;
            }
        }

        .section-add {
            background-image: linear-gradient(to right, blue , violet);
            width: 100px;
            text-align: center;
            cursor: pointer;
        }
    }

    .section-list {
        .section-task {
            background: #b91a1a;
            padding: 10px;
            display: flex;
            flex-direction: row;
            margin: 10px;

            .section-text {
                width: 100%;
            }
            .section-delete {
               width: 100px;
            }
            .section-edit {
                width: 100px;
            }
        }
    }
`;