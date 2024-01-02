'use client'
import { Image, Card, Grid, Blockquote, Text, Box, Divider } from '@mantine/core';
import styles from '@/app/page.module.css'

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
        <Grid my="5" >
            <Grid.Col>
                <Divider 
                    my="md"
                    label={
                        <>
                            <Box ml={5}><h2>望月田吾作について</h2></Box>
                        </>
                    }
                />
                {/* I'm Hyper Doraemon Creator in JAPAN */}
            </Grid.Col>
        </Grid>
        <Grid my="10">
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Card shadow="0" padding="md" radius="0">
                    <Card.Section>
                        <Image
                            src='https://motttey.github.io/doraemon-namecard.webp'
                            height={300}
                            style={{
                                maxWidth: "500px",
                                textAlign: "center"
                            }}
                            fit="cover"
                            alt="Tagosaku Mochiduki Profile"
                        />
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Card shadow="0" padding="md" radius="0">
                    <Card.Section>
                        <Text my={4}>
                            お仕事のご依頼や感想は、 motitago(at)gmail.com までよろしくお願いします。
                        </Text>
                        <Text my={4}>
                            もしイラストなど気に入って頂けた場合には、
                                <a
                                    className="link"
                                    target="blank"
                                    href="https://www.amazon.jp/hz/wishlist/ls/1YEAX8DRN0GWO?ref_=wl_share"
                                >
                                    ほしいものリスト
                                </a>
                                から何か送っていただけるとすごい喜びます。
                        </Text>
                    </Card.Section>
                    <Card.Section>
                        {/*
                        <Blockquote cite="Tagosaku Mochiduki">
                            He is a Hyper Doraemon Creator
                        </Blockquote>
                        */}
                    </Card.Section>
                </Card>
            </Grid.Col>
        </Grid>
    </div>
  )
}

export default Profile
