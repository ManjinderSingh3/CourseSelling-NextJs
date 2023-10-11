import { userLoadingState } from "@/store/selectors/userLoading";
import { userEmailState } from "@/store/selectors/userEmail";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function Home() {
  const router = useRouter();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(userLoadingState);

  return <div>
    <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 200 }}>
            <Typography variant={'h2'}>Learning Platform</Typography>
            <Typography variant={'h5'}>A place to learn and grow !!</Typography>
            {!userEmail && !userLoading && (
              <div style={{ display: 'flex', marginTop: 15 }}>
                <div style={{ marginRight: 15 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      router.push('/signup');
                    }}
                  >
                    Signup
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      router.push('/signin');
                    }}
                  >
                    SignIn
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
          <div style={{ marginTop: 100 }}>
            <img src={'/course.jpeg'} width={'100%'} />
          </div>
        </Grid>
      </Grid>
  </div>;
}
