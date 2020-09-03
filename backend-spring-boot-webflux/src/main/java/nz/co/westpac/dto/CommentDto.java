package nz.co.westpac.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CommentDto {
  private long postId;
  private long id;
  private String name;
  private String email;
  private String body;
}
