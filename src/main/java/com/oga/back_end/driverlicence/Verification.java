package com.oga.back_end.driverlicence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Verification {
    boolean passed ;
    @Override
    public String toString() {
        return "Verification{" +
                "passed=" + passed +
                '}';
    }


    public boolean isPassed() {
        return passed;
    }

    public void setPassed(boolean passed) {
        this.passed = passed;
    }
}