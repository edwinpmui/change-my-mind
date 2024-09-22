import React from 'react';

const PublicDebate = () => {
    return (
        <div style={styles.container}>
            <div style={styles.leftSide}>
                <div style={styles.videoContainer}>
                    <video style={styles.video} autoPlay muted>
                        {/* User 1's video stream */}
                    </video>
                </div>
                <p>Left side</p>
            </div>
            <div style={styles.rightSide}>
                <div style={styles.videoContainer}>
                    <video style={styles.video} autoPlay muted>
                        {/* User 2's video stream */}
                    </video>
                </div>
                <p>Right side</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        borderRight: '1px solid #ccc',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
    },
    videoContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: '20px',
    },
    video: {
        width: '45%',
        height: 'auto',
        backgroundColor: '#000',
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '30%',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default PublicDebate;