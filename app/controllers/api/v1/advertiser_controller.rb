class Api::V1::AdvertiserController < ApplicationController
  def index
    render json:  {users: ['John', 'Kate', 'Harry', 'Mary']}
  end
end
