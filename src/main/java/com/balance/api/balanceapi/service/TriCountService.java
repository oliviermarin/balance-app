package com.balance.api.balanceapi.service;

import com.balance.api.balanceapi.domain.TriCount;
import com.balance.api.balanceapi.domain.Attendee;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;;

@Service
public class TriCountService implements ITriCountService {
    
    @Autowired
    private JdbcTemplate jtm;

    @Override
    public boolean saveTriCount(TriCount triCount) {
        String sql = "INSERT INTO tri_count (title, currency, description, attendee_id) VALUES (?, ?, ?, ?)";
        Attendee owner = triCount.getOwner();
        return jtm.update(sql, new Object[] {triCount.getTitle(), triCount.getCurrency(), triCount.getDescription(), owner.getId()}) > 0;
    }

    @Override
    public List<TriCount> findAll() {
        StringBuilder sql = new StringBuilder("SELECT tcts.id, tcts.title, tcts.currency, tcts.description, atds.id as attendee_id, atds.name, atds.email ");
        sql.append("FROM tri_counts tcts ");
        sql.append("INNER JOIN public.attendees atds ");
        sql.append("ON tcts.attendee_id = atds.id ");
        
        return (List<TriCount>)jtm.query(sql.toString(), new RowMapper<TriCount>(){
            @Override
            public TriCount mapRow(ResultSet rs, int rowNum) throws SQLException {
                Attendee owner = new Attendee(rs.getString("name"), rs.getString("email"));
                owner.setId(rs.getLong("attendee_id"));

                TriCount triCount = new TriCount(rs.getString("title"), rs.getString("currency"), rs.getString("description"));
                triCount.setId(rs.getLong("id"));
                triCount.setOwner(owner);

                return triCount;
            }
        });
    }

}