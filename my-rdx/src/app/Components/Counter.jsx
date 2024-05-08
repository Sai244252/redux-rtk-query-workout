import styled from "styled-components";
import { Icon } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  getCounterState,
} from "../features/Counter/CounterSlice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Chip from "@mui/material/Chip";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterState);
  return (
    <ContentWrapper>
      <Circle>
        <Icon
          style={{ padding: "10px" }}
          fontSize="large"
          sx={{ color: red[500] }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "larger",
            }}
            onClick={() => dispatch(decrement())}
          >
            <RemoveCircleIcon />
          </button>
        </Icon>
      </Circle>
      <Chip label={counterValue.counter} />
      <Circle>
        <Icon
          style={{ padding: "10px" }}
          fontSize="large"
          sx={{ color: green[500] }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "larger",
            }}
            onClick={() => dispatch(increment())}
          >
            <AddCircleIcon />
          </button>
        </Icon>
      </Circle>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  box-shadow: 10px 5px 10px 12px gray;
  display: flex;
  justify-content: space-evenly;
  padding: 3%;
  align-items: center;
  margin-top: 20px;
  width: 50%;
`;

const Circle = styled.div`
  border-radius: 50%;
  box-shadow: 5px 5px 5px 5px gray;
  cursor: pointer;
  opacity: 0.4;
  transition: 1s ease-in-out;
  transform: scale(0.8);
  padding-bottom: 1%;

  &:hover {
    font-weight: 900;
    opacity: 1;
    transform: scale(1);
    box-shadow: 3px 3px 3px 3px gray;
    padding-bottom: 2%;
  }

  button {
    cursor: pointer;
  }
`;

export default Counter;
