import { BASE_URL } from "@/config";
import { userState } from "@/store/atoms/user";
import { Button, Card, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

const Signup = () => {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          paddingTop: 130,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">
          Welcome to Coursehub! Sign up below
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth={true}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth={true}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={async () => {
                const response = await axios.post(
                  `${BASE_URL}/admin/signup`,
                  {
                    username: username,
                    password: password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                localStorage.setItem("token", response.data.token);
                setUser({ isLoading: false, userEmail: username }); // re-rendering
                router.push("/");
              }}
            >
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
