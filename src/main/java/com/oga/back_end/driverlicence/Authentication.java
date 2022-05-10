package com.oga.back_end.driverlicence;

public class Authentication {

    @Override
    public String toString() {
        return "Authentication{" +
                "score=" + score +
                '}';
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    float score;
}
