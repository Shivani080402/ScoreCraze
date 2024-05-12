package com.crick.api.repository;

import com.crick.api.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Integer> {
    //match fetch by teamheading
    Optional<Match> findByTeamHeading(String teamHeading);



}
