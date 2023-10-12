import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/store/atoms/user";
import { userEmailState } from "@/store/selectors/userEmail";
import { userLoadingState } from "@/store/selectors/userLoading";

export default function Appbar() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState); // Setting up Atom
  const userEmail = useRecoilValue(userEmailState); // Subscribing to Selector
  const userLoading = useRecoilValue(userLoadingState); // Subscribing to Selector

  if (userLoading) {
    return <></>;
  }

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Typography variant="h5"> CourseHub</Typography>
        </div>
        <div>
          <Button
            onClick={() => {
              router.push("/createcourse");
            }}
          >
            Add Course
          </Button>

          <Button
            style={{ marginRight: 10 }}
            onClick={() => {
              router.push("/courses");
            }}
          >
            Courses
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.setItem("token", "");
              setUser({
                isLoading: false,
                userEmail: null,
              });
              router.push("/");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Typography variant="h5"> CourseHub</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, borderRadius: "20" }}>
            <Button
              onClick={() => {
                router.push("/signin");
              }}
              style={{ color: "#0d9488" }}
            >
              Signin
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                router.push("/signup");
              }}
              style={{
                borderRadius: 9999,
                backgroundColor: "#0d9488",
                fontSize: ".875rem",
              }}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

