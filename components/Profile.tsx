'use client'
import { Image, Card, Grid, Blockquote, Text } from '@mantine/core';

const Profile: React.FC = () => {
  return (
    <div style={{
        maxWidth: "100vw",
        minWidth: "80vw",
        pointerEvents: "none"
    }}>
        <Grid my="5" >
            <Grid.Col>
                <h2>Profile</h2>
            </Grid.Col>
        </Grid>
        <Grid my="10">
            <Grid.Col span={6}>
                <Card shadow="sm" padding="md" radius="0">
                    <Card.Section>
                        <Image
                            src='https://motttey.github.io/doraemon-namecard.webp'
                            height={360}
                            fit="cover"
                            alt="Tagosaku Mochiduki Profile"
                        />
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Card shadow="sm" padding="md" radius="0">
                    <Card.Section>
                        <Text my={4}>
                            お仕事のご依頼や感想は、 motitago(at)gmail.com までよろしくお願いします。
                            もしイラストなど気に入って頂けた場合には、ほしいものリストから何か送っていただけるとすごい喜びます。
                        </Text>
                    </Card.Section>
                    <Card.Section>
                        <Blockquote cite="Tagosaku Mochiduki">
                            He is a Hyper Doraemon Creator
                        </Blockquote>
                    </Card.Section>
                </Card>
            </Grid.Col>
        </Grid>
    </div>
  )
}

export default Profile
