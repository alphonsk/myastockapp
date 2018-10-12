class PostsController < ApplicationController

    def show
      @stock =Stock.new
        @posts = Post.all
        @post = Post.new
        @user_id = current_user.id
        @user = current_user  

    end

    def new
      @stock =Stock.new 
        @posts = Post.all
        @post = Post.new
        @user_id = current_user.id
        @user = current_user 
    end
 

    def create
      @stock =Stock.new  

      @posts = Post.all
      @post = Post.new
      @user = current_user  
     
        respond_to do |format|
          @post = Post.create(post_params) 
          if @post.save 
            puts params[:id]
            format.html { redirect_to @post, notice: 'Stock was successfully added' }
            format.json { render :show, status: :created, location: @stock }
            format.js {render inline: "location.reload();" }
          else
            format.html { render :new }
            format.json { render json: @post.errors, status: :unprocessable_entity }
            format.js
          end
        end
      end


      private

      def post_params
        params.require(:post).permit(:post, :title, :user_id )
      end

end

# <%= form_tag("/search", method: "get")  remote: true do %> 
#   <%= text_field_tag(:q) %>
#   <%= submit_tag("Search") %>
# <% end %>


             

# <form id="navSearch" action="/search" style="margin:auto;max-width:300px"  accept-charset="UTF-8" method="get">
# <input name="utf8" type="hidden" value="✓"> 
#           <input type="text" name="search" id="q">
#           <input type="submit"  class="fa fa-search" name="commit" value="Search" data-disable-with="Search">
# </form>
