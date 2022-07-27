// page file for the HogWARS game

export default function HogWARSGamePage(){
    const state = {
        player1: {
            name: 'Harry Potter',
            house: 'Gryffindor',
            playerImg: '',
            opponentImg: '',
            hp: 500
        },
        player2: {
            name: 'Lord Voldemort',
            house: 'Slytherin',
            playerImg: '',
            opponentImg: '',
            hp: 500
        },
        playerFaint: false,
        opponentFaint: false,
        gameOver: false
    }

    return(
        <h1>Hi</h1>
    )
}