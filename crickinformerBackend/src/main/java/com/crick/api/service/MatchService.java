package com.crick.api.service;

import com.crick.api.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    //get All Matches
    List<Match> getAllMatches();

    //get live matches
    List<Match> getLiveMatches();

    //get cwc2023 point table
    List<List<String>> getPointTable();

}
