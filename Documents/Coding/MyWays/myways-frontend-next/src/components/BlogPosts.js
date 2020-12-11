import React, { useContext } from "react"
import Link from "next/link"
import { APIContext } from "../contexts/APIContext"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const BlogPosts = ({ people }) => {
    // const { people } = useContext(APIContext)
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={6}>
                    {people.map((person) => (
                        <Grid item key={person.name}>
                            <Card
                                style={{
                                    height: "fit-content",
                                    width: "200px",
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {person.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {person.gender}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={`/blog/${person.name}`}>
                                        <Button size="small">Read More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BlogPosts
