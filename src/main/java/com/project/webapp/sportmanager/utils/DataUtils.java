package com.project.webapp.sportmanager.utils;

import java.time.LocalDateTime;

public final class DataUtils {

    public static Boolean isPasswordCorrect(String password) {
        return password == null ? Boolean.FALSE :
                password.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$");
    }

    public static Boolean isStartAndEndTimeCorrect(LocalDateTime startTime, LocalDateTime endTime) {
        return startTime != null && endTime != null && startTime.isBefore(endTime);
    }

}
