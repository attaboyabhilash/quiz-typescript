import AnimationComponent from "./AnimationComponent"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { useRouter } from "next/router"

export default function Error404() {
    const router = useRouter()
    return (
        <>
            <Grid
                container
                spacing={2}
                style={{
                    justifyContent: "space-around",
                    margin: "auto",
                }}
            >
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <AnimationComponent />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                style={{
                    justifyContent: "space-around",
                }}
            >
                <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
                    <Button
                        size="large"
                        variant="contained"
                        style={{
                            backgroundColor: "yellow",
                            marginTop: "10px",
                        }}
                        onClick={() => {
                            router.push("/dashboard")
                        }}
                    >
                        Back to Dashboard
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
